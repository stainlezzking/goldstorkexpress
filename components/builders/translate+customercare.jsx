"use client";

import { useEffect } from "react";
import { useState } from "react";

export const FloatingElements = function () {
  useEffect(function () {
    const googleScript = document.createElement("script");
    googleScript.setAttribute("src", "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");
    document.getElementById("googlescript_location").appendChild(googleScript);
    // debugger
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages:
            "af,ar,az,be,bg,bn,bs,ca,ceb,co,cs,cy,da,de,el,en,eo,es,et,eu,fa,fi,fr,fy,ga,gd,gl,gu,ha,haw,hi,hmn,hr,ht,hu,hy,id,ig,is,it,iw,ja,jw,ka,kk,km,kn,ko,ku,ky,la,lb,lo,lt,lv,mg,mi,mk,ml,mn,mr,ms,mt,my,ne,nl,no,ny,or,pa,pl,ps,pt,ro,ru,rw,sd,si,sk,sl,sm,sn,so,sq,sr,st,su,sv,sw,ta,te,tg,th,tk,tl,tr,tt,ug,uk,ur,uz,vi,xh,yi,yo,zh-CN,zh-TW,zu", //here include all languages that you need
        },
        "google_translate_element"
      );
    };
  }, []);
  return <></>;
};
