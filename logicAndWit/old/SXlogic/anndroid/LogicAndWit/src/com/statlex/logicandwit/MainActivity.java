package com.statlex.logicandwit;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.res.Configuration;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebStorage;
import android.webkit.WebView;
import android.widget.Toast;
import com.flurry.android.FlurryAgent;
import com.google.analytics.tracking.android.EasyTracker;
import com.google.android.gms.ads.AdListener;
import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.AdView;
import com.google.android.gms.ads.InterstitialAd;

public class MainActivity extends Activity {

	private final static int DELAY_TIMEPERIOD = 1 * 30 * 1000;
	private WebView mWebView;
	private InterstitialAd interstitial;

	/**
	 * 
	 * Method used to initialize and prepare interstitial ads to show
	 *
	 * @author pavel.sychykau@gmail.com
	 */
	private void initializeInterstitialAd(final AdRequest adRequest) {
		// Prepare the Interstitial Ad
		interstitial = new InterstitialAd(MainActivity.this);
		// Insert the Ad Unit ID
		interstitial.setAdUnitId("ca-app-pub-5044461949944464/7212820838");

		// AdRequest adRequest = new AdRequest.Builder().addTestDevice(AdRequest.DEVICE_ID_EMULATOR)
		// .addTestDevice("B3EEABB8EE11C2BE770B684D95219ECB").addTestDevice("81F7980FDEF4271FD10918CCAB65D50C").build();
		// Begin loading your interstitial.
		interstitial.loadAd(adRequest);
		interstitial.setAdListener(new AdListener() {
			public void onAdClosed() {
				interstitial.loadAd(adRequest);
			}
		});
	}

	/**
	 * 
	 * Show interstitial ad in case it is loaded
	 *
	 * @author pavel.sychykau@gmail.com
	 */
	@JavascriptInterface
	public void displayInterstitial() {
		messageHandler.sendEmptyMessage(0);
	}

	private Handler messageHandler = new Handler() {
		public void handleMessage(Message msg) {
			super.handleMessage(msg);
			if (interstitial.isLoaded()) {
				interstitial.show();
			}
		}
	};

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);

		setContentView(R.layout.activity_main);

		mWebView = (WebView) findViewById(R.id.webview);
		mWebView.addJavascriptInterface(this, "Android");
		WebSettings settings = mWebView.getSettings();

		settings.setJavaScriptEnabled(true);
		settings.setDomStorageEnabled(true);

		settings.setDatabaseEnabled(true);
		String dbPath = this.getApplicationContext().getDir("database", Context.MODE_PRIVATE).getPath();
		settings.setDatabasePath(dbPath);

		// settings.setAllowFileAccessFromFileURLs(true); //Maybe you don't need
		// this rule
		// settings.setAllowUniversalAccessFromFileURLs(true); // SDK v16
		settings.setJavaScriptCanOpenWindowsAutomatically(true);

		final Context myApp = this;

		mWebView.setWebChromeClient(new WebChromeClient() {

			public void onConsoleMessage(String message, int lineNumber, String sourceID) {
				Log.d("MyApplication", message + " -- From line " + lineNumber + " of " + sourceID);
			}

			@Override
			public void onExceededDatabaseQuota(String url, String databaseIdentifier, long currentQuota, long estimatedSize,
					long totalUsedQuota, WebStorage.QuotaUpdater quotaUpdater) {
				quotaUpdater.updateQuota(estimatedSize * 2);
			}

			public boolean onJsAlert(WebView view, String url, String message, final android.webkit.JsResult result) {
				new AlertDialog.Builder(myApp).setTitle("!!!").setMessage(message)
						.setPositiveButton(android.R.string.ok, new AlertDialog.OnClickListener() {
							public void onClick(DialogInterface dialog, int wicht) {
								result.confirm();
							}
						}).setCancelable(false).create().show();
				return true;
			};

		});

		// InMobi.setLogLevel(LOG_LEVEL.DEBUG);

		mWebView.loadUrl("file:///android_asset/www/index.html");

		// <!-- Ads
		AdView adView = (AdView) this.findViewById(R.id.adView);
		AdRequest adRequest = new AdRequest.Builder().addTestDevice(AdRequest.DEVICE_ID_EMULATOR)
				.addTestDevice("81F7980FDEF4271FD10918CCAB65D50C").addTestDevice("B3EEABB8EE11C2BE770B684D95219ECB").build();
		initializeInterstitialAd(adRequest);
		adView.loadAd(adRequest);
	};

	@Override
	public void onConfigurationChanged(Configuration newConfig) {
		super.onConfigurationChanged(newConfig);
	}

	private static long back_pressed;

	@Override
	public void onBackPressed() {

		// mWebView.loadUrl("javascript: window.location.reload();");
		if (mWebView.canGoBack()) {
			mWebView.goBack();
		} else {
			if (back_pressed + 2000 > System.currentTimeMillis()) {
				super.onBackPressed();
			} else {
				Toast.makeText(getBaseContext(), "Press again to exit.", Toast.LENGTH_SHORT).show();
			}
			back_pressed = System.currentTimeMillis();
		}
	}

	// google anal
	@Override
	public void onStart() {
		super.onStart();
		// The rest of your onStart() code.
		EasyTracker.getInstance(this).activityStart(this); // Add this method.
		FlurryAgent.onStartSession(this, "4NMV9Q3K86SP4Z4CKYDG");
	}

	// google anal
	@Override
	public void onStop() {
		super.onStop();
		// The rest of your onStop() code.
		EasyTracker.getInstance(this).activityStop(this); // Add this method.
		FlurryAgent.onEndSession(this);
	}

}
