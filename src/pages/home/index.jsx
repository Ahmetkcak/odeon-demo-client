import CreateFlight from "@/components/pagesComponents/CreateFlight";
import FlightList from "@/components/pagesComponents/FlightList";
import { isAdmin } from "@/hooks/getRoleInfo";
import React, { useEffect } from "react";

function Home() {

    const [adminControl, setAdminControl] = React.useState(false);

    useEffect(() => {
        const checkAdmin = isAdmin();
        setAdminControl(checkAdmin);
    }, [adminControl]);


    return (
        <div>
            {adminControl ? (
                <div className="flex flex-row">
                    <div className="w-1/2">
                        <FlightList />
                    </div>
                    <div className="w-1/2">
                        <CreateFlight />
                    </div>
                </div>
            ) : (
                <FlightList />
            )}
        </div>
    );
}

export default Home;
