
const SingleDetail = ({ props }) => {
    console.log("props theke");
    return (
        <p className="flex items-center -mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-[#FFAC41]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className="mx-2">{''}</span>
        </p>
    );
};

export default SingleDetail;