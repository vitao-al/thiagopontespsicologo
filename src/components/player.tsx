import { useRef, useState } from "react";
import { musics } from "../data/musics";

export default function PlayerMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }

    setPlaying(!playing);
  };

  const updateProgress = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const percent = (audio.currentTime / audio.duration) * 100;
    setProgress(percent);
  };

  return (
    <div className="w-full bg-musgo text-white flex items-center gap-4 p-4 rounded-lg shadow-xl">

      <audio
        ref={audioRef}
        src="/bgmusic.mp3"
        onTimeUpdate={updateProgress}
      />

      {/* botão play */}
      <button
        onClick={togglePlay}
        className="w-10 h-10 rounded-full flex items-center justify-center"
      >
        {playing ? "❚❚" : "▶"}
      </button>

      {/* capa */}
      <img
        src="/thiagoponteslogo2.jpg"
        className="w-12 h-12 rounded object-cover"
      />

      {/* título */}
      <div className="min-w-[180px]">
        <p className="font-semibold">Relax Relaxing Music</p>
        <p className="text-sm text-white">andriig</p>
      </div>

      {/* barra de progresso */}
      <div className="flex-1 h-2 bg-berge rounded relative">

        <div
          className="absolute top-0 left-0 h-2 bg-laranja rounded"
          style={{ width: `${progress}%` }}
        />

      </div>

      {/* tempo */}
      <span className="text-sm text-berge">
        {Math.floor(progress)}%
      </span>

    </div>
  );
}