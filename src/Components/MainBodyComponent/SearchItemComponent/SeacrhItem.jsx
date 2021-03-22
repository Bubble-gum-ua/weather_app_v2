import React, {useEffect} from "react";
import {Button, Input} from "@material-ui/core";
import {useFormik} from "formik";
import {getCityData} from "../../Redux/CardReducer";
import {useDispatch} from "react-redux";

export const SearchItem = () => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            name: '',
        },
        onSubmit: (values) => {
          let init =   localStorage.setItem("name", JSON.stringify(['']))
            dispatch(getCityData(values.name, 'ADD'))
            formik.resetForm()
            let d = JSON.parse(localStorage.getItem("name"))
            d.push(values.name)
            console.log(d)
            localStorage.setItem("name", JSON.stringify(d))


        },
    })

    useEffect(() => {
        return dispatch(getCityData(localStorage.getItem("name"), 'ADD'))
    }, [])
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Input
                    placeholder='Type here the city name' {...formik.getFieldProps('name')}
                    onChange={formik.handleChange} value={formik.values.name}
                />
                <Button type='submit'
                        variant='contained' color='primary'> Add City</Button>
            </form>
        </div>
    )
}