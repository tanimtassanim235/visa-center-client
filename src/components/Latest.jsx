import { Link, useLoaderData } from "react-router-dom";
import VisaCard from "./VisaCard";

const Latest = () => {
    const visas = useLoaderData();
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    visas.map(visaes => <VisaCard key={visaes._id} visaes={visaes}></VisaCard>)
                }
            </div>
            <div className="text-center">
                <Link className="btn btn-error my-8" to="/allvisas">See all visas</Link>
            </div>
        </div>

    );
};

export default Latest;