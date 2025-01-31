import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import { Link } from '@inertiajs/react';


export default function Index({ students }) {
    const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'ascending' });

    // ฟังก์ชันสำหรับการจัดเรียงข้อมูล
    const sortedStudents = [...students.data].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

    // ฟังก์ชันสำหรับการขอจัดเรียงข้อมูล
    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    // ฟังก์ชันสำหรับการลบข้อมูล
    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this student?')) {
            router.delete(`/students/${id}`);
        }
    };

    // ฟังก์ชันสำหรับการสร้างปุ่มการแบ่งหน้า
    const renderPagination = () => {
        const currentPage = students.current_page;
        const lastPage = students.last_page;
        const paginationLinks = [];

        if (currentPage > 1) {
            paginationLinks.push(
                <button
                    key="prev"
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    onClick={() => window.location.assign(students.prev_page_url)}>
                    Previous
                </button>
            );
        }

        if (currentPage > 3) {
            paginationLinks.push(
                <button key="1"
                    className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                    onClick={() => window.location.assign(students.links[1].url)}>
                    1
                </button>
            );
            paginationLinks.push(
                <span key="ellipsis1"
                    className='relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0'>...</span>);
        }

        for (let i = Math.max(1, currentPage - 1); i <= Math.min(lastPage, currentPage + 1); i++) {
            paginationLinks.push(
                <button
                    key={i}
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0 ${i === currentPage ? 'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-500 focus:outline-offset-0' : ''}`}
                    onClick={() => window.location.assign(students.links[i].url)}
                >
                    {i}
                </button>
            );
        }

        if (currentPage < lastPage - 1) {
            paginationLinks.push(<span key="ellipsis2"
                className='relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0'>...</span>);
            paginationLinks.push(
                <button key={lastPage} className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
                    onClick={() => window.location.assign(students.last_page_url)}>
                    {lastPage}
                </button>
            );
        }

        if (currentPage < lastPage) {
            paginationLinks.push(
                <button key="next" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    onClick={() => window.location.assign(students.next_page_url)}>
                    Next
                </button>
            );
        }

        return paginationLinks;
    };

    return (
        <div>
            <AuthenticatedLayout
                header={
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Student
                    </h2>
                }
            >
                <Head title="Register" />
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="p-6 text-gray-900">
                        <table className="min-w-full divide-y divide-gray-200 mt-4">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
                                        onClick={() => requestSort('StudentName')}>
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
                                        onClick={() => requestSort('Email')}>
                                        Email
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
                                        onClick={() => requestSort('Phone')}>
                                        Phone Number
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
                                        onClick={() => requestSort('Major')}>
                                        Major
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {students && students.data.length > 0 ? (
                                    sortedStudents.map((student) => (
                                        <tr key={student.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">
                                                {student.StudentName}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {student.Email}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {student.Phone}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {student.Major}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <div className="flex space-x-4">
                                                    <Link href={`/students/${student.id}/edit`} className="text-indigo-600 hover:text-indigo-900">Edit</Link>
                                                    <button onClick={() => handleDelete(student.id)} className="text-red-600 hover:text-red-900">Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="5"
                                            className="px-6 py-4 text-center text-sm text-gray-500"
                                        >
                                            ไม่มีข้อมูลนักเรียน
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        {sortedStudents.length > 0 && (
                            <div className="flex justify-center mt-10">
                                {renderPagination()}
                            </div>
                        )}
                    </div>
                </div>
            </AuthenticatedLayout>
        </div>
    )
}
