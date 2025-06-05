interface DocumentOutlineProps {
    name?: string;
}

const DocumentOutline = (props: DocumentOutlineProps): JSX.Element => {
    return (
        <div id="document-outline" className="w-[15rem] h-[15rem] cursor-pointer">
            <div className="bg-white border-2 border-gray-400 w-[100%] h-[100%]">
            </div>
            {props.name && <p className="text-white mt-1 text-[14px] text-center">{props.name}</p>}
        </div>
    );
};

export default DocumentOutline;