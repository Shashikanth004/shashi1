import React from "react";
import "./FlagGallery.css";

// Country data
const countries = [
  { name: "India: INR ", code: "in", video: "https://youtu.be/_41TeR12gDk?si=hiBr1hUGCBDSj6Ud" },
  { name: "USA: DOLLAR", code: "us", video: "https://youtu.be/VK4tPNmOcUI?si=Ox7aj-2qSiYrv2Yk" },
  { name: "UK: POUND", code: "gb", video: "https://youtu.be/EtxqFDhVOiM?si=Nn_fzUJoMaO71-k2" },
  { name: "Japan: YEN", code: "jp", video: "https://youtu.be/kI4qhULFG2o?si=9qeuYqt_wyFdStD_" },
  { name: "France: EURO", code: "fr", video: "https://youtube.com/shorts/fbQkVBNqWhM?si=7nyrYI7jl7NtDxCX" },
  { name: "Germany: EURO", code: "de", video: "https://youtube.com/shorts/OBPR-cn71mY?si=Jd_BsEo7PnQATGkW" },
  { name: "Brazil : REAIS", code: "br", video: "https://youtu.be/-_74QKRi_xo?si=lIljXKc3zNC9D81w" },
  { name: "Canada:CAD ", code: "ca", video: "https://youtube.com/shorts/w-ScVo9XGiY?si=6A7CfKvoMXBfnPaP" },
  { name: "China:RMB", code: "cn", video: "https://youtube.com/shorts/Kz45bJmceDU?si=hEkcOIReSgSvdVbi" },
  { name: "Australia:AUD", code: "au", video: "https://youtube.com/shorts/6mxDmdyNEVU?si=vC0T7QBMpXvooW37" },
  { name: "Russia:RUB", code: "ru", video: "https://youtu.be/xQWmu22PmL4?si=PtX9rodtmhxSqcPv" },
  { name: "Italy:EURO", code: "it", video: "https://youtu.be/yyShyIcWLG4?si=9CZkzV_SB36Tb1by" },
  { name: "South Korea:KRW", code: "kr", video: "https://youtu.be/NO5j9MFUB-w?si=eN4OQhx-37g5zx2g" },
  { name: "Spain:EUR", code: "es", video: "https://youtu.be/VKpkh0TMDGs?si=HZ36I-08zzObC_KO" },
  { name: "Mexico:PESSO", code: "mx", video: "https://youtube.com/shorts/5tU0I-49ApM?si=VgEEggY1g4Ys0qlu" },
  { name: "Netherlands:NLG", code: "nl", video: "https://youtu.be/uelHwf8o7_U" },
  { name: "Sweden:KRONA", code: "se", video: "https://youtube.com/shorts/raqgFUCvcvE?si=6eo6m4rwhdCl7U_d" },
  { name: "Switzerland:FRAC", code: "ch", video: "https://youtu.be/3CM2NZ92ieU?si=fKPy2eehcV98DkyLI" },
  { name: "Turkey:LIRA", code: "tr", video: "https://youtube.com/shorts/LzwtXunhndI?si=rWnmiTTGnW7nNSrV" },
  { name: "UAE:DIRHAM", code: "ae", video: "https://youtu.be/z0KWD2igC60?si=3Wmpaf800IQMBDl1" },
    { name: "Singapore: SGD", code: "sg", video: "https://youtu.be/qNmcFHuLYU4?si=1Z-GQsjHtPQIlptT" },
  { name: "Norway: NOK", code: "no", video: "https://youtube.com/shorts/UwtnbbXld9I?si=_Go7VbRZIRcVEzOa" },
  { name: "Argentina: ARS", code: "ar", video: "https://youtu.be/d-JegsfhyYA?si=5zTCD6cObTnHd8T7" },
  { name: "Egypt: EGP", code: "eg", video: "https://youtu.be/JVEUf-sgrlM?si=xKRxUPxKaDK4Wx9p" },
  { name: "South Africa: ZAR", code: "za", video: "https://youtube.com/shorts/9sh-3Gq7XY4?si=7qLwFG5uYYLJGkE1" },
  { name: "Thailand: THB", code: "th", video: "https://youtu.be/yKnBJb6Y9Ro?si=STMCn_3LOmUPtMcR" },
  { name: "Indonesia: IDR", code: "id", video: "https://youtu.be/HOyCn18nDs4?si=oeaSnJOsSDZn4jWA" },
];

const FlagsGallery = () => {
  return (
  
  <div className="flags-container">
      {countries.map((country) => (
        <div
          key={country.code}
          className="flag-card"
          onClick={() => window.open(country.video, "_blank", "noopener,noreferrer")}
        >
          <img
            src={`https://flagcdn.com/w80/${country.code}.png`}
            alt={`${country.name} flag`}
            className="flag-image"
          />
          <p>{country.name}</p>
        </div>
      ))}
    </div>
    
  );
};

export default FlagsGallery;
