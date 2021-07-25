import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faMapMarkedAlt,
  faPhoneAlt
} from '@fortawesome/free-solid-svg-icons';
import { jsPDF } from 'jspdf';
import React, { useEffect, useRef, useState } from 'react';

import Education from '../components/education';
import Employment from '../components/employment';
import Profile from '../components/profile';
import Projects from '../components/projects';
import TechStack from '../components/techstack';
import FONT_FACES from '../constants/fonts';
import '../styles/App.scss';

library.add(faGithub, faEnvelope, faPhoneAlt, faMapMarkedAlt);

export default function App() {
  const [svgList, setSvgList] = useState<NodeListOf<SVGSVGElement>>();
  const [mainFrame, setMainFrame] = useState({
    startX: 0,
    startY: 0,
    width: 0,
    height: 0
  });

  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const svgList = document.querySelectorAll('svg');
    setSvgList(svgList);

    const main = mainRef.current;
    if (main) {
      const {
        x: startX,
        y: startY,
        width,
        height
      } = main.getBoundingClientRect();
      setMainFrame({ startX, startY, width, height });
    }
  }, []);

  const renderSvg = async (pdf: jsPDF, svg: SVGSVGElement): Promise<jsPDF> => {
    const { x, y, width, height } = svg.getBoundingClientRect();
    return pdf.svg(svg, {
      x: x - mainFrame.startX,
      y: y - mainFrame.startY,
      width,
      height
    });
  };

  const savePDF = async () => {
    const { jsPDF } = await import('jspdf');
    await import('svg2pdf.js');

    const pdf = new jsPDF('portrait', 'pt', [
      mainFrame.width,
      mainFrame.height
    ]);

    pdf.html(mainRef.current, {
      callback: async function (pdf) {
        const promises: Promise<jsPDF>[] = [];
        svgList.forEach((svg) => {
          promises.push(renderSvg(pdf, svg));
        });

        await Promise.all(promises);
        pdf.deletePage(2);
        pdf.save('cv.pdf');
      },
      filename: 'Curriculum Vitae',
      html2canvas: {
        letterRendering: true,
        ignoreElements: (element) => {
          return element.tagName === 'svg';
        }
      },
      fontFaces: FONT_FACES,
      x: 0,
      y: 0
    });
  };

  return (
    <main className={'main'} onClick={savePDF} ref={mainRef}>
      <section className={'lhs'}>
        <Profile />
        <hr />
        <TechStack />
      </section>
      <section className={'rhs'}>
        <Employment />
        <hr />
        <Education />
        <hr />
        <Projects />
      </section>
    </main>
  );
}
