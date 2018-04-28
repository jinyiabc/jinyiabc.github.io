import React from 'react';
import kjhVita from './pdf-test/kjh-vita.pdf';



const PdfEmbed = () => (
    <embed src={kjhVita} width="100%" height="500px" type="application/pdf"></embed>
)

export default PdfEmbed
