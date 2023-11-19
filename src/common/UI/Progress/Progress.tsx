const Progress: React.FC<{ percent: string; className: string }> = ({
  percent,
  className
}) => {
  const marginInlineStartCss = ` ms-[calc(${percent}%-1.25rem)] `;

  const widthCss = ` w-[${percent}%] `;

  return (
    <div className={className}>
      <div
        className={
          "inline-block mb-2 py-0.5 px-1.5 bg-blue-50 border border-blue-200 text-xs font-medium text-blue-600 rounded-lg dark:bg-blue-800/30 dark:border-blue-800 dark:text-blue-500" +
          marginInlineStartCss
        }
      >
        {percent}%
      </div>
      <div
        className="flex w-full h-2 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-700"
        role="progressbar"
        aria-valuenow={50}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={
            "flex flex-col justify-center overflow-hidden text-xs text-center text-white transition duration-500 bg-blue-600 rounded-full whitespace-nowrap dark:bg-blue-500" +
            widthCss
          }
        ></div>
      </div>
    </div>
  );
};

export default Progress;
