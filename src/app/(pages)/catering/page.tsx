import CateringContent from "@/app/(mainsite)/components/cateringpage/CateringContent/CateringContent"
import Find from "@/app/(mainsite)/components/homepage/Find/Find"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import type { Metadata } from "next"

export const metadata: Metadata = {
	  title: `Catering | ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
	  description: `Catering | ${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
openGraph: {
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
type: "website",
images: [
{
url: `${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`,
width: 1280,
height: 720,
}
]
},
twitter: {
card: 'summary_large_image',
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
 images: [`${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`]
}
}

export default function CateringPage(){
	 return(
	 	 <>
			<PageTitle pageTitle="Catering" />
			<CateringContent />
			<Find />
	 	 </>
	 )
}