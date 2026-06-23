type CountdownTimerProps = {
  days?: string;
  hours?: string;
  minutes?: string;
  seconds?: string;
};

const timerParts = [
  ["Days", "days"],
  ["Hours", "hours"],
  ["Minutes", "minutes"],
  ["Seconds", "seconds"],
] as const;

export function CountdownTimer({
  days = "03",
  hours = "23",
  minutes = "19",
  seconds = "56",
}: CountdownTimerProps) {
  const values = {
    days,
    hours,
    minutes,
    seconds,
  };

  return (
    <div className="flex flex-wrap items-end justify-center gap-3 sm:gap-5">
      {timerParts.map(([label, key], index) => (
        <div key={key} className="flex items-end gap-3 sm:gap-5">
          <div className="text-center">
            <p className="mb-1 text-sm font-bold text-ink">{label}</p>
            <p className="text-[34px] font-extrabold leading-none tracking-[0.04em] text-ink sm:text-[42px]">
              {values[key]}
            </p>
          </div>
          {index < timerParts.length - 1 ? (
            <span className="pb-1 text-[34px] font-bold leading-none text-[#e4777c] sm:text-[42px]">
              :
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
