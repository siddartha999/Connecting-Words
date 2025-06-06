export enum DocumentType {
    DEFAULT,
    BOOK
}

interface DocumentOutlineProps {
    type: DocumentType
}

const DocumentOutline = (props: DocumentOutlineProps): JSX.Element => {

    /**
     * Construct document name from the given type
     */
    const constructDocumentName = (): string => {
        switch (props.type) {
            case DocumentType.BOOK: return "Book";
            case DocumentType.DEFAULT: return "Default";
        }
    };

    /**
     * Constructs customized styles for the given type
     */
    const constructStylesForDocument = (): string => {
        switch (props.type) {
            case DocumentType.BOOK: return "bg-yellow-200 border-4 border-black";
            case DocumentType.DEFAULT: return "bg-white border-2 border-gray-400";
        }
    };

    return (
        <div id="document-outline" className="w-[15rem] h-[15rem] cursor-pointer">
            <div className={`w-[100%] h-[100%] ${constructStylesForDocument()}`}>
            </div>
            <p className="text-white mt-1 text-[14px] text-center">{constructDocumentName()}</p>
        </div>
    );
};

export default DocumentOutline;