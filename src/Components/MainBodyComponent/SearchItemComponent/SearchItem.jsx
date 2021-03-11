import React from "react";
import {Button, Input} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {getCityInfo} from "../../Redux/CardReducer";
import {useFormik} from "formik";

export const SearchItem = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            name: '',
        },
        onSubmit: (values) => {
            dispatch(getCityInfo(values.name, 'ADD_CITY'))
            formik.resetForm()
        },
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit} >
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