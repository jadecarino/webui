/*
 * Copyright contributors to the Galasa project
 *
 * SPDX-License-Identifier: EPL-2.0
 */
'use client';
import { Section } from "@carbon/react";
import styles from "@/styles/HomeContent.module.css";
import { useEffect, useState } from "react";
import MarkdownIt from 'markdown-it';
import { useRouter } from 'next/navigation';
import AccessDeniedModal from "./common/AccessDeniedModal";
import { MarkdownResponse } from "@/utils/interfaces";

interface HomeContentProps {
  markdownContentPromise: Promise<MarkdownResponse>;
}

export default function HomeContent({ markdownContentPromise }: HomeContentProps) {

  const [renderedHtmlContent, setRenderedHtmlContent] = useState<string>("");
  const [isAccessAllowed, setIsAccessAllowed] = useState(true);
  const router = useRouter();

  useEffect(() => {
    let md = new MarkdownIt({
      html: false
    });

    const setRenderedHtmlFromMarkdown = async () => {
      try {
        const markdownContent = await markdownContentPromise;

        if (markdownContent.responseStatusCode === 403) {
          setIsAccessAllowed(false);
        }

        if(markdownContent.responseStatusCode === 200){
          setRenderedHtmlContent(md.render(markdownContent.markdownContent));
        }

      } catch (err) {
        console.error('Error fetching or processing markdown content', err);
      }
    };

    setRenderedHtmlFromMarkdown();
  }, [markdownContentPromise, isAccessAllowed]);

  if (!isAccessAllowed) {
    return <AccessDeniedModal />;
  }

  return (
    <Section level={1}>
      <div className={styles.homeContentWrapper}>
        <div dangerouslySetInnerHTML={{ __html: renderedHtmlContent }} />
      </div>
    </Section>
  );

}