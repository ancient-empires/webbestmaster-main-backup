package com.statlex.bingo;

import com.google.android.gms.ads.*;
import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.res.Configuration;
import android.os.Bundle;
import android.util.Log;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebStorage;
import android.webkit.JsResult;

public class MainActivity extends Activity {

	private WebView mWebView;
	
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        mWebView = (WebView) findViewById(R.id.webview);
        
        WebSettings settings = mWebView.getSettings(); 
        
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        
        settings.setDatabaseEnabled(true);
        String dbPath = this.getApplicationContext().getDir("database", Context.MODE_PRIVATE).getPath();
        settings.setDatabasePath(dbPath);
        
        settings.setAllowFileAccessFromFileURLs(true); //Maybe you don't need this rule
        settings.setAllowUniversalAccessFromFileURLs(true);
        
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
            
            public boolean onJsAlert(WebView view, String url, String message, final android.webkit.JsResult result)
            {
                new AlertDialog.Builder(myApp)
                .setTitle("!!!")
                .setMessage(message)
                .setPositiveButton(android.R.string.ok,
                        new AlertDialog.OnClickListener()
                {
                    public void onClick(DialogInterface dialog, int wicht)
                    {
                        result.confirm();
                    }
                }).setCancelable(false)
                .create()
                .show();
                return true;
            };
        	  
        });
        
        mWebView.loadUrl("file:///android_asset/www/index.html");
        
//        AdView adView = (AdView)this.findViewById(R.id.adView);
//        AdRequest adRequest = new AdRequest.Builder().build();
//        adView.loadAd(adRequest);
        
    }
    
    @Override
    public void onConfigurationChanged(Configuration newConfig){        
        super.onConfigurationChanged(newConfig);
    }
    
    
    @Override
    public void onBackPressed() {
    	
    	//mWebView.loadUrl("javascript: window.location.reload();");
    	
    	
    	if (mWebView.canGoBack()) {
            mWebView.goBack();
        } else {
            super.onBackPressed();
        }
        
    	
    }
    
}