import { useSelector } from "react-redux"
import { sadMomentsSelector } from "../selectors"

type SadTrackerProps = {

}

const SadTracker = (props: SadTrackerProps) => {
    const sadMoments = useSelector(sadMomentsSelector)
    return (
        <>
            {sadMoments.length > 0 && <div className="border rounded p-2 bg-yellow-500 text-white">
                {sadMoments.map((moment) => (
                    <div>
                        <>
                            <div>
                                <span className="font-bold">sad intensity:</span> {moment.intensity}
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
export default SadTracker