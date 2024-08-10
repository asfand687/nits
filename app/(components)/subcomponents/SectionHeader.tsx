import React from 'react'

type Props = {
  slogan : string;
  title: string;
  textCenter?: boolean;
  titleFont?: string;
  gapClass?: string;
  sloganGapClass?: string;
}

const SectionHeader = ({ slogan, title, textCenter, titleFont, gapClass, sloganGapClass }: Props) => {
  return (
    <div className={`${textCenter ? "text-center": "text-left"} font-semibold ${gapClass ? gapClass : ""}`}>
      <h2 className={`text-[#ea3a60] tracking-wider ${sloganGapClass ? sloganGapClass : ""}`}>{slogan}</h2>
      <h2 className={`${titleFont ? titleFont : "text-4xl"}`}>{title}</h2>
    </div>
  )
}

export default SectionHeader