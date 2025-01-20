
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="md:w-3/12 mx-auto text-center py-12">
            <p className="text-[#D99904] text-xl mb-4">{subHeading}</p>
            <h3 className="text-[#151515] text-4xl border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;