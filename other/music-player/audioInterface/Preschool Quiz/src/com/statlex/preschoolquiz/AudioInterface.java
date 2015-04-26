package com.statlex.preschoolquiz;

import java.io.IOException;

import android.content.Context;
import android.content.res.AssetFileDescriptor;
import android.media.MediaPlayer;
import android.media.MediaPlayer.OnCompletionListener;
import android.media.MediaPlayer.OnErrorListener;
import android.media.MediaPlayer.OnPreparedListener;
import android.util.Log;
import android.webkit.JavascriptInterface;

public class AudioInterface implements OnPreparedListener,
		OnCompletionListener, OnErrorListener {

	private final Context mContext;
	private final MediaPlayer mp;

	public AudioInterface(Context c) {
		mContext = c;
		mp = new MediaPlayer();
		mp.setOnPreparedListener(this);
		mp.setOnCompletionListener(this);
		mp.setOnErrorListener(this);
	}

	@JavascriptInterface
	public void playAudio(String aud) {
		play(aud, false);
	}
	
	@JavascriptInterface
	public void playAudioLooping(String aud) {
		play(aud, true);
	}
	
	private void play(String aud, boolean looping) {
		try {
			stop();
			
			AssetFileDescriptor fd = mContext.getAssets().openFd(aud);
			mp.setDataSource(fd.getFileDescriptor(), fd.getStartOffset(), fd.getLength());
			fd.close();
			mp.setLooping(looping);
			mp.prepareAsync();
		} catch (IllegalArgumentException e) {
			Log.e(null, "Error playing " + aud, e);
		} catch (IllegalStateException e) {
			Log.e(null, "Error playing " + aud, e);
		} catch (IOException e) {
			Log.e(null, "Error playing " + aud, e);
		}
	}
	
	@JavascriptInterface
	public void stop() {
		if (mp.isPlaying()) {
			mp.stop();
			mp.reset();
		}
	}

	@Override
	public void onPrepared(MediaPlayer mp) {
		mp.start();
	}

	@Override
	public void onCompletion(MediaPlayer mp) {
		mp.stop();
		mp.reset();
	}
	
	public void release() {
		mp.stop();
		mp.reset();
		mp.release();
	}

	@Override
	public boolean onError(MediaPlayer mp, int what, int extra) {
		Log.e(null, "AudioInterface.onError(): what= " + what + ", extra="
				+ extra);
		return false;
	}
}