import { useSelector } from "react-redux"
import { happyMomentsSelector } from "../selectors"

type HappyTrackerProps = {

}

const HappyTracker = (props: HappyTrackerProps) => {
    const happyMoments = useSelector(happyMomentsSelector)
    // console.log(happyMoments)
    return (
        <>
            {happyMoments.length > 0 && <div className="border rounded p-2 bg-green-500 text-white">
                {happyMoments.map((moment) => (
                    <div>
                        <>
                            <div>
                                <span className="font-bold">happiness intensity: </span>{moment.intensity}
                            </div>
                            <div>
                                <span className="font-bold">time:</span> {moment.when.toLocaleTimeString()}
                            </div>
                        </>
                    </div>
                ))}
            </div>}
        </>
    )
}
HappyTracker.defaultProps = {};
export default HappyTracker