import React, { useEffect, useState } from "react";
import axios from "axios";
import * as pdfjs from 'pdfjs-dist'
import {Button, Header, Input} from "semantic-ui-react";
import { Document, Page} from "react-pdf";
import {UploadMenu} from "./UploadMenu";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
).toString();

export const UpdateMenu = () => {
    const [allImage, setAllImage] = useState(null);
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    const [pdfFile, setPdfFile] = useState(null);

    useEffect(() => {
            getPdf();
        },
        []);
    const getPdf = async () => {
        const result = await axios.get("http://localhost:5000/get-files");
        console.log(result.data.data);
        setAllImage(result.data.data);
    };

    const onFileLoad = event => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = e => {
            setPdfFile(e.target.result);
        }

        reader.readAsDataURL(file);
        setPdfFile(file);
    }
    const submitImage = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        const result = await axios.post(
            "http://localhost:5000/upload-files",
            formData,
            {
                headers: {"Content-Type": "multipart/form-data"},
            }
        );
        console.log(result);
        if (result.data.status === "ok") {
            alert("Uploaded Successfully!!!");
            await getPdf();
        }
    };

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className="pdfUpload">
            <form className="formStyle" onSubmit={submitImage}>
                <h4>Upload Menu PDF Here</h4>
                <br/>
                <Input type="file" accept=".pdf" onChange={onFileLoad}/>
                <br/>
                <Button type="submit" primary onClick={UploadMenu({pdfFile, numPages})}>
                    Submit
                </Button>
            </form>
            <div className="uploaded">
                <h4>Preview of PDF:</h4>
            </div>
            <div className="pdf-div">
                <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                    {Array.apply(null, Array(numPages))
                        .map((x, i) => i + 1)
                        .map((page) => {
                            return (
                                <>
                                <p>
                                    Page {pageNumber} of {numPages}
                                </p>
                            <Page
                                pageNumber={page}
                                    renderTextLayer={false}
                                    renderAnnotationLayer={false}
                                />
                                </>
                            );
                        })}
                </Document>

            </div>
        </div>
    )
}