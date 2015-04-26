package com.statlex.preschoolquiz;

import com.google.android.gms.ads.*;
import android.app.Activity;
import android.content.Context;
import android.content.res.Configuration;
import android.media.AudioManager;
import android.os.Bundle;
import android.util.Log;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebStorage;

public class MainActivity extends Activity {

	private WebView mWebView;
	
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        mWebView = (WebView) findViewById(R.id.webview);
        
        mWebView.addJavascriptInterface(new AudioInterface(this), "AndAud_0");
        mWebView.addJavascriptInterface(new AudioInterface(this), "AndAud_1");
        mWebView.addJavascriptInterface(new AudioInterface(this), "AndAud_2");
        mWebView.addJavascriptInterface(new AudioInterface(this), "AndAud_3");
        
        WebSettings settings = mWebView.getSettings(); 
        
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        
        settings.setDatabaseEnabled(true);
        String dbPath = this.getApplicationContext().getDir("database", Context.MODE_PRIVATE).getPath();
        settings.setDatabasePath(dbPath);
        
        setVolumeControlStream(AudioManager.STREAM_MUSIC);
        
        mWebView.setWebChromeClient(new WebChromeClient() {
        	  
        	public void onConsoleMessage(String message, int lineNumber, String sourceID) {
        	    Log.d("MyApplication", message + " -- From line " + lineNumber + " of " + sourceID);
        	}
        	  
            @Override
            public void onExceededDatabaseQuota(String url, String databaseIdentifier, long currentQuota, long estimatedSize,
                long totalUsedQuota, WebStorage.QuotaUpdater quotaUpdater) {
                    quotaUpdater.updateQuota(estimatedSize * 2);
                }
        	  
        });
        
        mWebView.loadUrl("file:///android_asset/www/index.html");
        
        AdView adView = (AdView)this.findViewById(R.id.adView);
        AdRequest adRequest = new AdRequest.Builder().build();
        adView.loadAd(adRequest);
        
    }
    
    @Override
    public void onConfigurationChanged(Configuration newConfig){        
        super.onConfigurationChanged(newConfig);
    }
    
    
    @Override
    public void onBackPressed() {
    	
    	mWebView.loadUrl("javascript:onBackButton();");
    	
    	/*
    	if (mWebView.canGoBack()) {
            mWebView.goBack();
        } else {
            super.onBackPressed();
        }
        */
    	
    }
    
}

