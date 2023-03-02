import { useRouter } from "next/router"

const NavBackToHome = () => {
    const router = useRouter()
    return (
        <div>
            <button className="back-to-home-button" onClick={() => {
                router.replace("/")
            }}>Back to Home Page</button>
        </div>
    );
};
export default NavBackToHome;
