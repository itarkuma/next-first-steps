import type { Metadata } from "next";

export const metadata:Metadata = {
 title: 'SEO Title',
 description: 'Page About description',
 keywords:['About Page','Franky','informacion']
};
export default function AboutPage(){
  return (
      <span className="text-7xl" >AboutPage </span>
  )
}