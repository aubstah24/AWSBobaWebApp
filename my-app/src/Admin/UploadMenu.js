import React, { useEffect, useState } from "react";
import axios from "axios";
import * as pdfjs from 'pdfjs-dist'
import {Button, Header, Input} from "semantic-ui-react";
import { Document, Page} from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
).toString();

export const UploadMenu = ({pdf, numPages}) => {


    return (
        <div className="pdf-div">
            <Document file={pdf}>
                {Array.apply(null, Array(numPages))
                    .map((x, i) => i + 1)
                    .map((page) => {
                        return (
                            <Page
                                pageNumber={page}
                                renderTextLayer={false}
                                renderAnnotationLayer={false}
                            />
                        );
                    })}
            </Document>
        </div>
    )
}