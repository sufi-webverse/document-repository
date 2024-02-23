import { useEffect, useState } from "react";

export default function LoadingBar() {
  const [loadingPercentage, setLoadingPercentage] = useState(1);

  useEffect(() => {
    let intervalTime = 40;
    let myInterval = setInterval(() => {
      if(loadingPercentage > 70){
        intervalTime = 70;
      }
      if (loadingPercentage < 100) setLoadingPercentage(loadingPercentage + 3);
    }, intervalTime);
    return () => {
      clearInterval(myInterval);
    };
  });

  return loadingPercentage < 100 ? (
    <>
      <div className="h-[4px] w-full absolute top-0 bg-gray-100">
        <div
          className={`h-[4px] bg-primary`}
          style={{
            width: loadingPercentage + "%",
            transition: '0.5s ease'
          }}
        ></div>
      </div>
    </>
  ) : (
    ""
  );
}
