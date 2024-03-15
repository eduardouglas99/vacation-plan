import { HolidaysServiceProps } from '@/interface/Holidays';
import jsPDF from 'jspdf';

const generatePDF = (holidayPDF: HolidaysServiceProps) => {
  const doc = new jsPDF();

  const styles = {
    // Title
    h1: {
      fontSize: 24,
      textAlign: 'center',
      marginTop: 20,
      marginBottom: 10,
    },
    // Information
    h2: {
      textAlign: 'center',
      fontSize: 20,
      marginBottom: 10,
    },
    // Items
    h3: {
      fontSize: 10,
      marginBottom: 10,
    },
    // Descriptions
    text: {
      fontSize: 12,
      lineHeight: 1.5,
      marginBottom: 10,
      width: 200,
    },
    // Footer
    p: {
      fontSize: 8,
    },
  };

  doc.setFontSize(styles.h1.fontSize);
  doc.text('2024 - Vacation Plan', 105, styles.h1.marginTop, { align: 'center' });

  doc.setFontSize(styles.text.fontSize);
  doc.text(`Welcome to the new vacation plan! Below, you'll find all the essential information regarding our upcoming vacation schedule. From the title and description to the start and end dates of the vacation period, along with the destination and the names of participants, everything you need to know is listed here. Let's dive in and explore the exciting details of our upcoming vacation plan!`, 15, 40, { align: 'left', maxWidth: 180 });

  doc.setFontSize(styles.h2.fontSize);
  doc.text('Informations', 15, 100);

  doc.setFontSize(styles.text.fontSize);
  doc.text('Check out the following information for details on our new vacation plan. Get all the essential information about the title, description, dates, location, and participant names.', 15, 110, { maxWidth: 180 });

  doc.setFontSize(styles.h3.fontSize);
  doc.text(`Title: ${holidayPDF && holidayPDF.title}`, 15, 140);
  doc.text(`Description: ${holidayPDF && holidayPDF.description}`, 15, 150);
  doc.text(`Participants: ${holidayPDF && holidayPDF.names.map((name) => name.label).join(', ')}`, 15, 160);
  doc.text(`Initial Period: ${new Date(holidayPDF.initialPeriod).toLocaleDateString()}`, 15, 170);
  doc.text(`End Period: ${new Date(holidayPDF.endPeriod).toLocaleDateString()}`, 15, 180);

  doc.setFontSize(styles.p.fontSize);
  doc.text('Sincerely,', 15, 210);
  doc.setFontSize(styles.p.fontSize);
  doc.text('Team', 15, 220);

  doc.save(`vacation-plan.pdf`);
};


export default generatePDF;