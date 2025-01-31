<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $students = Student::paginate(20);

        return Inertia::render('Student/Index', [
            'students' => $students,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Student/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Log::info($request->all());

        $validated = $request->validate([
            'StudentName' => 'required',
            'Major' => 'required',
            'Email' => 'required',
            'Phone' => 'required',
        ]);

        try {
            Student::create($validated);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return back()->with('error', 'Failed to create student. Please try again.');
        }

        return redirect()->route('students.index')->with('success', 'Student created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        log::info($id);
        $Student = Student::findOrFail($id);

        return Inertia::render('Student/Edit', [
            'Student' => $Student,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        Log::info($request->all());
        try {
            $student = Student::findOrFail($id);
            $validated = $request->validate([
                'StudentName' => 'required',
                'Major' => 'required',
                'Email' => 'required',
                'Phone' => 'required',
            ]);
            $student->update($validated);
            return redirect()->route('students.index', $id)->with('success', 'Student updated successfully.');
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return back()->with('error', 'Failed to update student. Please try again.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $student = Student::findOrFail($id);
            $student->delete();
            return redirect()->route('students.index')->with('success', 'Student deleted successfully.');
        } catch (\Exception $e) {
            return redirect()->route('students.index')->with('error', 'Failed to delete student. Please try again.' . $e->getMessage());
        }
    }
}
