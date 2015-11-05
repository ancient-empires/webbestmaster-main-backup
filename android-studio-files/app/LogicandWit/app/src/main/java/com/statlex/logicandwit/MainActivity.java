package com.statlex.logicandwit;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;

import android.app.Activity;
import android.content.Context;
import android.content.res.Configuration;
import android.media.AudioManager;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.util.Log;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebSettings.RenderPriority;
import android.webkit.WebStorage;
import android.webkit.WebView;
import android.widget.Toast;

import com.google.android.gms.analytics.GoogleAnalytics;
import com.google.android.gms.analytics.Tracker;


//admob
import com.google.android.gms.ads.AdListener;
import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.AdView;
import com.google.android.gms.ads.InterstitialAd;

public class MainActivity extends Activity {


    public static GoogleAnalytics analytics;
    public static Tracker tracker;

    private WebView webView;
    private AudioInterface audioInterface_0;
    private AudioInterface audioInterface_1;
    private AudioInterface audioInterface_2;
    private AudioInterface audioInterface_3;

    //admob
    private InterstitialAd interstitial;

    // set state for is active/pause
    private static boolean activityVisible = true;

    public static boolean isActivityVisible() {
        return activityVisible;
    }

    public static void activityResumed() {
        activityVisible = true;
    }

    public static void activityPaused() {
        activityVisible = false;
    }

    //admob
    private void initializeInterstitialAd(final AdRequest adRequest) {
        // Prepare the Interstitial Ad
        interstitial = new InterstitialAd(MainActivity.this);
        // Insert the Ad Unit ID
        interstitial.setAdUnitId("ca-app-pub-5044461949944464/1172282431");

        interstitial.loadAd(adRequest);
        interstitial.setAdListener(new AdListener() {
            public void onAdClosed() {
                interstitial.loadAd(adRequest);
            }
        });
    }

    //admob
    @JavascriptInterface
    public void displayInterstitial() {
        if (isActivityVisible()) {
            messageHandler.sendEmptyMessage(0);
        }
    }

    //admob
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

        analytics = GoogleAnalytics.getInstance(this);
        analytics.setLocalDispatchPeriod(1800);

        tracker = analytics.newTracker("UA-53856001-2"); // Replace with actual tracker/property Id
        tracker.enableExceptionReporting(true);
        tracker.enableAdvertisingIdCollection(true);
        tracker.enableAutoActivityTracking(true);

//		requestWindowFeature(Window.FEATURE_NO_TITLE);
//		this.getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,
//				WindowManager.LayoutParams.FLAG_FULLSCREEN);

        setContentView(R.layout.activity_main);

        audioInterface_0 = new AudioInterface(this);
        audioInterface_1 = new AudioInterface(this);
        audioInterface_2 = new AudioInterface(this);
        audioInterface_3 = new AudioInterface(this);

        webView = (WebView) findViewById(R.id.webView);

        webView.addJavascriptInterface(audioInterface_0, "AndAud_0");
        webView.addJavascriptInterface(audioInterface_1, "AndAud_1");
        webView.addJavascriptInterface(audioInterface_2, "AndAud_2");
        webView.addJavascriptInterface(audioInterface_3, "AndAud_3");

        //admob
        webView.addJavascriptInterface(this, "Android");

        WebSettings settings = webView.getSettings();

        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);

        settings.setDatabaseEnabled(true);
        String dbPath = this.getApplicationContext()
                .getDir("database", Context.MODE_PRIVATE).getPath();
        settings.setDatabasePath(dbPath);

        settings.setAllowContentAccess(true);
        settings.setAllowFileAccess(true);
//        settings.setAllowFileAccessFromFileURLs(true);
//        settings.setAllowUniversalAccessFromFileURLs(true);
        settings.setRenderPriority(WebSettings.RenderPriority.HIGH);

        setVolumeControlStream(AudioManager.STREAM_MUSIC);

        // set volume
        AudioManager am = (AudioManager) getSystemService(Context.AUDIO_SERVICE);
        am.setStreamVolume(AudioManager.STREAM_MUSIC, am.getStreamMaxVolume(AudioManager.STREAM_MUSIC) / 2, 0);


        webView.setWebChromeClient(new WebChromeClient() {

            public void onConsoleMessage(String message, int lineNumber,
                                         String sourceID) {
                Log.d("MyApplication", message + " -- From line " + lineNumber
                        + " of " + sourceID);
            }

            @Override
            public void onExceededDatabaseQuota(String url,
                                                String databaseIdentifier, long currentQuota,
                                                long estimatedSize, long totalUsedQuota,
                                                WebStorage.QuotaUpdater quotaUpdater) {
                quotaUpdater.updateQuota(estimatedSize * 2);
            }

        });

        webView.loadUrl("file:///android_asset/www/index.html");

        // admob
//        AdView adView = (AdView) this.findViewById(R.id.adView);
        AdRequest adRequest = new AdRequest.Builder()
                .addTestDevice(AdRequest.DEVICE_ID_EMULATOR)
                .addTestDevice("9C68F80BF392A2C03C75BC66CA25A827")
                .build();
        initializeInterstitialAd(adRequest);
//        adView.loadAd(adRequest);

    }

    @Override
    protected void onDestroy() {
        activityPaused();
        audioInterface_0.release();
        audioInterface_1.release();
        audioInterface_2.release();
        audioInterface_3.release();
        super.onDestroy();
    }

    @Override
    protected void onPause() {
        activityPaused();
        audioInterface_0.pause();
        audioInterface_1.pause();
        audioInterface_2.pause();
        audioInterface_3.pause();
        super.onPause();
    }

    @Override
    protected void onResume() {
        activityResumed();
        audioInterface_0.unPause();
        audioInterface_1.unPause();
        audioInterface_2.unPause();
        audioInterface_3.unPause();
        super.onResume();
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
    }

    // back button - begin
    private static long back_pressed;

    @Override
    public void onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack();
        } else {
            if (back_pressed + 2000 > System.currentTimeMillis()) {
                super.onBackPressed();
            } else {
                Toast.makeText(getBaseContext(), "Press again to exit.",
                        Toast.LENGTH_SHORT).show();
            }
            back_pressed = System.currentTimeMillis();
        }
    }
    // back button - end

}