package com.danikula.jsplayer;

import android.app.Activity;
import android.media.AudioManager;
import android.os.Bundle;
import android.util.Log;
import android.view.ViewGroup;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.CompoundButton;


public class MainActivity extends Activity {

    private static final String LOG_TAG = "MainActivity";

    private Sounds sounds;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        sounds = new Sounds(this, 4);
        setContentView(R.layout.activity_main);

        setupWebView();

        setupAndroidUi();
    }

    private void setupWebView() {
        WebView webView = (WebView) findViewById(R.id.webView);
        webView.loadUrl("file:///android_asset/index.html");
        webView.addJavascriptInterface(sounds, "AndAud");
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        setVolumeControlStream(AudioManager.STREAM_MUSIC);
        webView.setWebChromeClient(new WebChromeClient() {
            public void onConsoleMessage(String message, int lineNumber, String sourceID) {
                Log.d(LOG_TAG, message + " -- From line " + lineNumber + " of " + sourceID);
            }
        });
    }

    private void setupAndroidUi() {
        ViewGroup loopContainer = (ViewGroup) findViewById(R.id.loopContainer);
        ViewGroup buttonsContainer = (ViewGroup) findViewById(R.id.sampleButtonsContainer);
        for (int i = 0; i < buttonsContainer.getChildCount(); i++) {
            CompoundButton sampleButton = (CompoundButton) buttonsContainer.getChildAt(i);
            CompoundButton loopCheckbox = (CompoundButton) loopContainer.getChildAt(i);
            sampleButton.setOnCheckedChangeListener(new OnSampleCheckedChangeListener(i, loopCheckbox));
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();

        sounds.release();
    }

    private class OnSampleCheckedChangeListener implements CompoundButton.OnCheckedChangeListener {

        private final int sample;
        private final CompoundButton loopCheckbox;

        private OnSampleCheckedChangeListener(int index, CompoundButton loopCheckbox) {
            this.sample = index;
            this.loopCheckbox = loopCheckbox;
        }

        @Override
        public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
            if (isChecked) {
                String asset = sample + ".mp3";
                boolean loop = loopCheckbox.isChecked();
                sounds.play(sample, asset, loop);
            } else {
                sounds.stop(sample);
            }
        }
    }
}
