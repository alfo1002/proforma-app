
import type { Dispatch, SetStateAction } from "react"
const tipOptions = [
    { id: 'tip-10', value: .10, label: '10%' },
    { id: 'tip-15', value: .15, label: '15%' },
    { id: 'tip-20', value: .20, label: '20%' },
    { id: 'tip-25', value: .25, label: '25%' },
    { id: 'tip-30', value: .30, label: '30%' },
]

type TipPercentageFormComponentProps = {
    setTip: Dispatch<SetStateAction<number>>,//(value: number) => void
    tip: number
}

export const TipPercentageFormComponent = ({ setTip, tip }: TipPercentageFormComponentProps) => {
    return (
        <div>
            <h3 className="font-black text-2xl">Propina:</h3>
            <form>
                {tipOptions.map(option => (
                    <div key={option.id} className="flex items-center">
                        <input
                            type="radio"
                            id={option.id}
                            name="tip"
                            value={option.value}
                            onChange={e => setTip(+e.target.value)}
                            className="mr-2"
                            checked={tip === option.value}
                        />
                        <label htmlFor={option.id}>{option.label}</label>
                    </div>
                ))}
            </form>
        </div>
    )
}
