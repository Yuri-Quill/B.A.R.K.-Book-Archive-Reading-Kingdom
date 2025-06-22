import { useEffect } from "react";

interface HeadOptions {
   title: string;
   description?: string;
}

export const useHead = ({ title, description }: HeadOptions) => {
   useEffect(() => {
      const prevTitle = document.title;

      const prevDescription = document.querySelector(
         "meta[name='description']"
      );

      document.title = title;

      let descriptionTag: HTMLMetaElement | null = null;

      if (description) {
         descriptionTag = document.querySelector("meta[name='description']");

         if (!descriptionTag) {
            descriptionTag = document.createElement("meta");
            descriptionTag.name = "description";
            document.head.appendChild(descriptionTag);
         }

         descriptionTag.content = description;
      }

      return () => {
         document.title = prevTitle;

         if (descriptionTag && !prevDescription) {
            document.head.removeChild(descriptionTag);
         } else if (descriptionTag && prevDescription) {
            descriptionTag.content =
               prevDescription.getAttribute("content") || "";
         }
      };
   }, [title, description]);
};
