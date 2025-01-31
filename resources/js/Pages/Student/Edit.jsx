import React, { useState, useEffect, useRef } from "react";
import { useForm, usePage, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const EditStudent = ({ Student }) => {
    const { data, setData, errors, put } = useForm({
        StudentName: Student.StudentName,
        Major: Student.Major,
        Email: Student.Email,
        Phone: Student.Phone,
    });
    const StudentNameInputRef = useRef(null);

    useEffect(() => {
        if (StudentNameInputRef.current) {
            StudentNameInputRef.current.focus();
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/students/${Student.id}`, data);
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Student
                </h2>
            }>
            <Head title="Edit Student" />
            <div className="py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-6">Edit</h2>
                    <from onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                            <input
                                type="text"
                                Value={data.StudentName}
                                onChange={(e) => setData('StudentName', e.target.value)}
                                ref={StudentNameInputRef}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            {errors.StudentName && <div className="text-red-500 text-sm">{errors.StudentName}</div>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Major:</label>
                            <input
                                type="text"
                                Value={data.Major}
                                onChange={(e) => setData('Major', e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            {errors.Major && <div className="text-red-500 text-sm">{errors.Major}</div>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                            <input
                                type="text"
                                Value={data.Email}
                                onChange={(e) => setData('Email', e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            {errors.Email && <div className="text-red-500 text-sm">{errors.Email}</div>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Phone:</label>
                            <input
                                type="text"
                                Value={data.Phone}
                                onChange={(e) => setData('Phone', e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            {errors.Phone && <div className="text-red-500 text-sm">{errors.Phone}</div>}
                        </div>
                        <div className="flex justify-end mt-7">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Save </button>
                        </div>
                    </from>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default EditStudent;
