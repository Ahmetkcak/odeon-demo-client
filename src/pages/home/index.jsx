import Button from "@/components/baseComponents/Button"
import Checkbox from "@/components/baseComponents/Checkbox"
import DateTimePicker from "@/components/baseComponents/Datepicker"
import Input from "@/components/baseComponents/Input"
import Select from "@/components/baseComponents/Select"


function Home() {

    const selectOptions = [
        { label: 'İstanbul', value: 'istanbul' },
        { label: 'Ankara', value: 'ankara' },
        { label: 'İzmir', value: 'izmir' },
    ];

    return (
        <div>
            <Input label="Adı" placeholder="Jhon" />
            <Select label="Şehirler" options={selectOptions} />
            <Checkbox label="Is Admin" />
            <DateTimePicker />
            <Button label="Register" />
            <Button label="Sign Up" />
        </div>
    )
}

export default Home