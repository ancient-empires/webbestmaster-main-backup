package com.danikula.jsplayer;

import android.content.Context;
import android.content.res.AssetFileDescriptor;
import android.content.res.AssetManager;
import android.media.AudioManager;
import android.media.SoundPool;
import android.text.TextUtils;
import android.util.Log;
import android.util.SparseArray;
import android.webkit.JavascriptInterface;

import java.io.IOException;

/**
 * Music player that supports few channels.
 *
 * @author Alexey Danilov (danikula@gmail.com).
 */
public class Sounds implements SoundPool.OnLoadCompleteListener {

    private static final String LOG_TAG = "Sounds";

    private final AssetManager assetManager;
    private final int samplesCount;
    private final SoundPool soundPool;
    private final SparseArray<Sample> samples;

    public Sounds(Context context, int samplesCount) {
        this.assetManager = context.getResources().getAssets();
        this.samplesCount = samplesCount;
        this.soundPool = new SoundPool(samplesCount, AudioManager.STREAM_MUSIC, 0);
        this.soundPool.setOnLoadCompleteListener(this);
        this.samples = new SparseArray<>(samplesCount);
    }

    @JavascriptInterface
    public void play(int sampleIndex, String assetPath, boolean loop) {
        checkSample(sampleIndex);
        Sample sample = samples.get(sampleIndex);
        if (sample == null) {
            load(sampleIndex, assetPath, loop);
            return;
        }

        boolean sameAssets = TextUtils.equals(assetPath, sample.asset);
        if (sameAssets) {
            if (sample.loaded) {
                sample.loop = loop;
                play(sample);
            }
        } else {
            soundPool.stop(sample.streamId);
            soundPool.unload(sample.soundId);
            load(sampleIndex, assetPath, loop);
        }
    }

    @JavascriptInterface
    public void stop(int sampleIndex) {
        checkSample(sampleIndex);
        Sample sample = samples.get(sampleIndex);
        if (sample != null) {
            Log.d(LOG_TAG, "stop " + sample);
            soundPool.stop(sample.streamId);
            samples.remove(sampleIndex);
        }
    }

    public void release() {
        soundPool.release();
    }

    private void load(int sampleIndex, String asset, boolean loop) {
        try {
            AssetFileDescriptor assetFileDescriptor = assetManager.openFd(asset);
            int sampleId = soundPool.load(assetFileDescriptor, 0);
            Sample sample = new Sample(sampleId, asset, loop);
            samples.put(sampleIndex, sample);
        } catch (IOException e) {
            Log.e(LOG_TAG, "Error loading assets " + asset, e);
        }
    }

    private void play(Sample sample) {
        Log.d(LOG_TAG, "play " + sample);
        int loopSample = sample.loop ? -1 : 0;
        soundPool.stop(sample.streamId);
        int streamId = soundPool.play(sample.soundId, 1, 1, 0, loopSample, 1);
        if (streamId == 0) {
            Log.e(LOG_TAG, "Error playing " + sample);
        } else {
            sample.streamId = streamId;
        }
    }

    private void checkSample(int sample) {
        if (sample >= samplesCount) {
            throw new IllegalArgumentException("Sample must be in range [0.." + (samplesCount - 1) + "], but not " + sample);
        }
    }

    @Override
    public void onLoadComplete(SoundPool soundPool, int soundId, int status) {
        boolean success = status == 0;
        Sample sample = findSample(soundId);
        if (success) {
            if (sample != null) {
                sample.loaded = true;
                play(sample);
            } else {
                Log.e(LOG_TAG, "There is no sample with sound id " + soundId);
            }
        } else {
            Log.e(LOG_TAG, "Error loading sample " + sample);
        }
    }

    private Sample findSample(int soundId) {
        for (int i = 0; i < samples.size(); i++) {
            Sample sample = samples.valueAt(i);
            if (sample.soundId == soundId) {
                return sample;
            }
        }
        return null;
    }

    private static final class Sample {

        private final int soundId;
        private final String asset;
        private int streamId;
        private boolean loaded;
        private boolean loop;

        private Sample(int soundId, String asset, boolean loop) {
            this.soundId = soundId;
            this.asset = asset;
            this.loaded = false;
            this.loop = loop;
        }

        @Override
        public String toString() {
            final StringBuilder sb = new StringBuilder("Sample{");
            sb.append("soundId=").append(soundId);
            sb.append(", asset='").append(asset).append('\'');
            sb.append(", streamId=").append(streamId);
            sb.append(", loaded=").append(loaded);
            sb.append(", loop=").append(loop);
            sb.append('}');
            return sb.toString();
        }
    }

}
