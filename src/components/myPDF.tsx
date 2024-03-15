import React, { useContext } from 'react';
import CalendarContext from '@/common/context';
import generatePDF, { Resolution, Margin } from 'react-to-pdf';

const options = {
  method: 'open',
  page: {
     // margin is in MM, default is Margin.NONE = 0
     margin: Margin.MEDIUM,
     // default is 'A4'
     format: 'A4',
     // default is 'portrait'
     orientation: 'portrait',
  }
};

const getTargetElement = () => document.getElementById('content-id');

const MyPDF = () => {
  const { holidayPDF } = useContext(CalendarContext);

  return (
    <div>
       <button onClick={() => generatePDF(getTargetElement, options)}>Generate PDF</button>
       <div id="content-id">
          {
              holidayPDF && (
                <>
                  <h2>{holidayPDF.title}</h2>
                  <h2>{holidayPDF.description}</h2>
                  <h2>{new Date(holidayPDF.endPeriod).toLocaleDateString()}</h2>
                  <h2>{new Date(holidayPDF.initialPeriod).toLocaleDateString()}</h2>
                  <h2>{holidayPDF.location}</h2>
                  <h2>{holidayPDF.names.map(name => name.label).join(', ')}</h2>
                </>
            )
          }
       </div>
    </div>
 );

};

export default MyPDF;
