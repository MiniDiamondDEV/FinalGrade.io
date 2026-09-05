# 🔥 FinalGrade.io

> **A powerful, modern grade calculation and progress-report tool for
> teachers and students**

[![Version](https://img.shields.io/badge/Version-26.4.10-blue.svg)](UPDATES.md)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md)
[![Status](https://img.shields.io/badge/Status-Active-success.svg)](STATUS.md)

## 📋 Table of Contents

-   [Overview](#overview)
-   [Features](#features)
-   [Getting Started](#getting-started)
-   [Usage](#usage)
    -   [Teacher View](#teacher-view)
    -   [Student View](#student-view)
-   [Grade Calculation](#grade-calculation)
-   [Data and Saving](#data-and-saving)
-   [File Structure](#file-structure)
-   [Technology Stack](#technology-stack)
-   [Browser Support](#browser-support)
-   [Privacy and Security](#privacy-and-security)
-   [Version History](#version-history)
-   [Contributing](#contributing)
-   [License](#license)
-   [Additional Resources](#additional-resources)

## 🎯 Overview

**FinalGrade.io 26.4.10** is a browser-based grade calculator and
gradebook interface designed for teachers and students.

The 26.x generation expands FinalGrade.io beyond basic grade calculation
with progress reports, a redesigned Teacher View, an Infinite
Campus-inspired Student View, manual publishing of gradebook changes,
assignment progress-period placement, improved status tracking,
notification history, and a modern responsive interface.

FinalGrade.io remains a local-first application. Gradebook information
is stored in the browser using `localStorage`, with no FinalGrade.io
server required for normal gradebook operation.

### Key Highlights

-   🔥 **Current Release: 26.4.10**
-   📊 **Progress Reports** --- 4.5, 9, 13.5, and 18 Week Progress plus
    Final Avg.
-   👨‍🏫 **Teacher Workspace** --- Categories, assignments, weights,
    statuses, comments, progress periods, and grade calculation
-   🎓 **Student Gradebook** --- Published grades, assignments, progress
    periods, details, and notifications
-   💾 **Manual Gradebook Publishing** --- Teacher edits remain
    unpublished until manually saved
-   🔔 **Student Update Notifications** --- Alerts for meaningful saved
    gradebook changes
-   📱 **Responsive Navigation** --- Persistent bottom navigation with
    overlay-aware dialogs
-   🎨 **Modern 26.x Interface** --- Reworked menus, confirmations,
    lists, dialogs, animations, and loading experience
-   🔐 **Local-First Storage** --- Gradebook data remains in the browser

## ✨ Features

### Teacher Features

#### 📊 Grade Category Management

-   Create and edit grade categories
-   Assign category weights
-   Enable or disable categories without deleting them
-   Reorder and manage categories
-   Close progress/course sessions
-   Disabled categories receive the disabled/faded appearance only while
    disabled
-   Default grading categories use a `0%` starting weight until
    configured

#### 📝 Assignment Management

-   Add assignments within individual categories
-   Set assignment names
-   Enter graded points and total points
-   Set due dates
-   Track assignment status
-   Add teacher comments
-   Duplicate and delete assignments
-   Assign assignments to progress periods
-   Manage assignments in category-specific lists
-   Keep assignment controls compact enough to fit the redesigned
    Teacher View
-   Hide empty assignment content where no assignments are available

#### 📈 Progress Reports

FinalGrade.io 26.x includes dedicated progress-report management for:

  Progress Period      Default Availability
  -------------------- -------------------------------------
  4.5 Week Progress    Enabled
  9 Week Progress      Enabled
  13.5 Week Progress   Enabled
  18 Week Progress     Enabled / default assignment period
  Final Avg.           Calculated

Teachers can:

-   Add or enable progress periods
-   Enter progress grades
-   Configure progress weights
-   Use the current calculated grade
-   Close a progress session
-   Select which progress period receives assignments
-   Default assignment placement to **18 Week Progress**
-   Keep progress-period assignment selections grouped across the
    gradebook where applicable

#### 🧮 Grade Calculation

-   Weighted category calculation
-   Assignment multipliers
-   Semi-weighted multiplier behavior so multipliers influence an
    assignment without overpowering the gradebook
-   Grade capacity/capping controls
-   0, 1, or 2 decimal-place display
-   Category and overall grade calculations
-   Multiplier `0` grade exclusion behavior
-   Blank/unweighted handling

#### 💾 Manual Save and Publish System

Starting with the current 26.4.x behavior, FinalGrade.io no longer
publishes every teacher edit automatically.

-   Teacher edits can remain as unsaved changes
-   Student View continues showing the previously saved gradebook
-   **Save Changes** publishes the current teacher gradebook
-   Student grades and progress information update after the teacher
    manually saves
-   The former rapid/automatic gradebook save behavior is disabled for
    publishing
-   Local calculations can still update in Teacher View without
    immediately changing the student's published view

#### 🔔 Saved-Change Notifications

Student notifications are generated for meaningful **saved** gradebook
changes, including:

-   Grade updates
-   Assignment name updates
-   Assignment status updates
-   Assignment due-date updates
-   Teacher comment updates
-   Progress-report grade updates
-   Progress/course session closures

Simply adding an assignment does not create the same unnecessary update
alert by itself.

Notification behavior includes:

-   Red unread-count bubble
-   `9+` display for larger unread counts
-   Notification history
-   Clicking a notification marks it read
-   Viewing the notification drawer briefly marks seen notifications as
    read
-   Read notifications remain in history with reduced emphasis

#### 🎛️ Management Tools

-   All Grade Assignments manager
-   All Grade Categories manager
-   Calculate Overall Grade
-   Add Category
-   Reset Everything
-   Redesigned confirmation dialogs
-   Wider modern popups
-   Custom interface icons
-   Overlay layering above the persistent bottom navigation

### Student Features

#### 🎓 Infinite Campus-Inspired Student View

The Student View provides a clean academic portal layout with:

-   Term information
-   Course name
-   Grades tab
-   Assignments tab
-   Progress-report sections
-   Final average section
-   Assignment details
-   Status indicators
-   Due dates
-   Teacher comments
-   Published grade information

#### 📖 Progress-Period Display

Students can view the configured progress periods individually.

Assignments are displayed only in their assigned progress period. Empty
assignment messages are hidden instead of showing unnecessary **No
assignments available** sections.

#### 📝 Assignment Details

Assignments can display:

-   Assignment name
-   Category
-   Due date
-   Earned points
-   Total points
-   Relevant multiplier information
-   Assignment status
-   Teacher comment

Unused or meaningless values are hidden where appropriate. For example,
exposed `0.00%` category output is suppressed when it does not provide
useful grade information.

#### 🔔 Notifications

The Student View includes gradebook notifications for meaningful
teacher-published changes.

Unread notifications are visually emphasized. Once seen or opened, they
become read while remaining available in notification history.

## 🚀 Getting Started

### Quick Start

1.  Open `index.html` in a modern browser or deploy it through GitHub
    Pages.
2.  Open **Teacher View** to configure the course and gradebook.
3.  Configure categories, progress reports, and assignments.
4.  Calculate the current grade as needed.
5.  Click **Save Changes** when the gradebook is ready to be published.
6.  Open **Student View** to see the latest saved/published gradebook.

### Default Gradebook Structure

A fresh 26.4.10 gradebook is designed around these sections:

  Section                      Default Weight
  -------------------------- ----------------
  Final                                    0%
  Formative                                0%
  Summative                                0%
  Uncategorized Assignment                 0%

Progress reporting includes:

  Progress Report      Purpose
  -------------------- --------------------------------------------
  4.5 Week Progress    Early progress snapshot
  9 Week Progress      Midterm progress snapshot
  13.5 Week Progress   Later progress snapshot
  18 Week Progress     Default/current assignment progress period
  Final Avg.           Final/current calculated result

## 📖 Usage

### Teacher View

#### Creating a Category

1.  Select **Add Category**.
2.  Enter the category name.
3.  Configure its weight.
4.  Save the category.
5.  Enable or disable it as needed.

#### Adding an Assignment

1.  Choose the progress period for assignment placement.
2.  Open the appropriate category.
3.  Select **Add Assignment**.
4.  Enter the assignment information.
5.  Configure score, total points, status, due date, multiplier, or
    comment as needed.
6.  Continue editing without publishing immediately.
7.  Select **Save Changes** when the student gradebook should receive
    the update.

#### Closing a Session

A category or progress session can be closed from Teacher View. Closing
a session is treated as a meaningful gradebook update and can create a
student notification after the gradebook is saved.

### Student View

Student View intentionally represents the latest **saved/published**
teacher gradebook rather than every unsaved Teacher View edit.

Students can:

-   Review progress periods
-   Open assignments
-   Check grades and scores
-   Review due dates and statuses
-   Read teacher comments
-   Review gradebook notifications
-   Switch between Grades and Assignments

## 🧮 Grade Calculation

### Weighted Category Formula

At the category level, FinalGrade.io uses weighted category
contributions:

``` text
Weighted Grade =
Σ(Category Grade × Category Weight)
────────────────────────────────────
        Σ(Category Weights)
```

### Assignment Multipliers

Assignments support multipliers. In 26.4.10, multiplier behavior is
intended to be **semi-weighted**: a higher multiplier gives an
assignment additional influence while avoiding an excessively aggressive
weighting effect.

A multiplier of `1` represents normal influence. A multiplier of `0`
excludes the assignment from grade contribution.

### Status Handling

Assignment statuses can be used to represent states such as:

-   Turned In
-   Missing
-   Late
-   Incomplete
-   Excused/Dropped
-   Other supported gradebook states

The exact grade effect depends on the status and assignment data
configured in the gradebook.

### Maximum Grade Capacity

The **Maximum Grade Capacity** setting controls the highest overall
grade FinalGrade.io can display when grade capping is
enabled/configured.

## 💾 Data and Saving

### Local Storage

FinalGrade.io stores its gradebook state using the browser's
`localStorage` API.

### Teacher Draft vs. Published Student Gradebook

26.4.10 separates active Teacher View editing from the saved Student
View state:

``` text
Teacher edits
     ↓
Unsaved gradebook state
     ↓
Save Changes
     ↓
Published local gradebook
     ↓
Student View + notifications
```

This prevents unfinished teacher edits from immediately changing what
students see.

### Important

Clearing site/browser storage can remove locally stored FinalGrade.io
data. Keep backups of important gradebook information when using the
application for long-term records.

## 📁 File Structure

The current deployable build can operate as a bundled single-page file:

``` text
FinalGrade.io/
├── index.html
├── README.md
├── UPDATES.md
├── LICENSE.md
└── STATUS.md
```

### `index.html`

The current build can contain the application's structure, styles,
runtime logic, grade calculator, Teacher View, Student View, dialogs,
navigation, and local persistence in a bundled deployment.

This makes the project suitable for static hosting such as GitHub Pages.

## 🛠️ Technology Stack

  Technology         Purpose
  ------------------ ------------------------------------------------------
  HTML5              Application structure
  CSS3               Interface, layout, responsive design, and animations
  JavaScript ES6+    Gradebook logic and interactions
  localStorage API   Local gradebook persistence
  GitHub Pages       Static deployment option

FinalGrade.io is designed around vanilla browser technologies and does
not require a server-side framework for its core gradebook behavior.

## 🌐 Browser Support

  Browser                Support
  ---------------------- ----------------------
  Chrome                 ✅ Recommended
  Edge                   ✅ Supported
  Firefox                ✅ Supported
  Safari                 ✅ Modern versions
  Opera                  ✅ Chromium versions
  Internet Explorer 11   ❌ Unsupported

A modern browser with ES6+, `localStorage`, Flexbox, Grid, and current
DOM API support is recommended.

## 🔒 Privacy and Security

FinalGrade.io uses a local-first gradebook model.

-   Gradebook data is stored in the browser
-   No FinalGrade.io account is required for the local build
-   No gradebook server is required for normal calculations
-   Student View reads the locally published gradebook state
-   Clearing browser/site data can remove locally stored information

Users should avoid treating browser storage as a permanent institutional
backup.

## 🎨 26.x UI/UX

The 26.x interface includes:

-   Redesigned Home page
-   Animated loading experience
-   FinalGrade.io flame branding
-   Quicksand-style loading text
-   Persistent floating bottom navigation
-   Bottom navigation kept visible while scrolling
-   Full-screen overlay priority above navigation
-   Footer positioned naturally at the bottom of applicable pages rather
    than fixed to the viewport
-   Student View footer suppression
-   Wider dialogs
-   Reworked confirmations
-   Reworked category and assignment lists
-   Custom icons
-   Cleaner progress-report layout
-   Responsive tablet/mobile positioning
-   Reduced legacy UI behavior

## 🐛 Troubleshooting

### Student grade did not change

Make sure the teacher selected **Save Changes**. Unsaved Teacher View
edits intentionally do not publish to Student View.

### Notification did not appear

Notifications are intended for meaningful saved changes. Simply creating
an assignment does not necessarily generate an alert.

### Notification badge remains visible

Open the notification center and view the unread notifications. Seen
notifications are marked read and the badge count updates.

### Empty assignment section appears

The 26.4.10 Student View is intended to hide empty assignment messaging.
Refresh the current build if older cached UI is still visible.

### Gradebook disappeared

Check whether browser/site storage was cleared or whether the page is
running under a different origin/location.

## 📈 Version History

### 2026 --- 26.x

#### v26.4.10 --- September 2026 --- Current

-   Manual gradebook publishing with **Save Changes**
-   Student View remains on the previous published gradebook until save
-   Removed legacy rapid autosave publishing behavior
-   Reworked Student notifications
-   Added unread notification counts and `9+` badge
-   Added seen/read notification behavior
-   Notifications remain available after being read
-   Limited alerts to meaningful gradebook changes
-   Added progress-period assignment placement
-   Default assignment progress period set to 18 Week Progress
-   Reworked assignment/category management interfaces
-   Improved disabled-category fade behavior
-   Reworked legacy confirmations, menus, lists, and popups
-   Wider dialogs and custom icons
-   Improved overlay layering over bottom navigation
-   Fixed footer spacing and positioning
-   Student View footer hidden
-   Suppressed unnecessary empty-assignment messages
-   Suppressed exposed `0.00%` output where inappropriate
-   Additional TypeError and stability fixes
-   Refined Teacher View layout and positioning
-   Semi-weighted assignment multiplier behavior

#### v26.4 --- August 2026

-   Major 26.4 gradebook redesign
-   Reworked navigation
-   Introduced updated FinalGrade.io branding and ownership presentation
-   Expanded Teacher View
-   Infinite Campus-inspired Student View
-   Stronger settings and gradebook controls
-   Multiplier-zero grade exclusion improvements
-   New progress-report architecture
-   Updated responsive interface
-   Expanded gradebook management tools

#### v26.3 --- June 2026

-   Continued Teacher and Student workspace modernization
-   Improved grade calculations and category controls
-   Expanded assignment metadata and status handling
-   UI and performance refinements

#### v26.2 --- March 2026

-   Expanded Student View functionality
-   Improved assignment detail presentation
-   Enhanced category calculations
-   Responsive and usability improvements

#### v26.1 --- December 2025

-   Beginning of the 26.x generation
-   Major interface modernization
-   Improved dialogs and animations
-   Enhanced mobile behavior
-   Stronger grade persistence
-   Updated category and Student View presentation

### 2025 --- 25.x BETA

#### v2025.0.6.0 --- October 2025

-   Late beta stabilization
-   Improved assignment status tracking
-   Grade calculation accuracy improvements
-   Student gradebook refinements
-   Performance and reliability fixes

#### v2025.0.5.3 --- August 2025

-   Beta patch release
-   Assignment and category fixes
-   Student View presentation improvements
-   General stability work

#### v2025.0.5.2 --- August 2025

-   Continued multiplier and category calculation tuning
-   UI consistency fixes
-   Improved gradebook state handling

#### v2025.0.5.1 --- August 2025

-   Student View fixes
-   Assignment display refinements
-   Improved grade capping behavior

#### v2025.0.5.0 --- August 2025

-   Expanded Student View beta
-   Assignment multiplier functionality
-   Enhanced grade capacity/capping controls
-   Improved teacher/student grade presentation

#### v2025.0.4.0 --- July 2025

-   Expanded category management
-   Assignment workflow improvements
-   Early Student View work
-   Interface and calculation fixes

#### v2025.0.3.0 --- May 2025

-   Beta gradebook expansion
-   Improved category calculations
-   Assignment management refinements

#### v2025.0.2.0 --- May 2025

-   Added additional gradebook controls
-   Improved assignment entry
-   Early persistence improvements

#### v2025.0.1.1 --- May 2025

-   Initial beta fixes
-   Calculation corrections
-   UI stability improvements

#### v2025.0.1.0 --- November 2024

-   Original FinalGrade.io development release
-   Basic grade calculation
-   Category management
-   Assignment management
-   Early browser-local persistence

## 🤝 Contributing

Contributions are welcome.

1.  Fork the repository.
2.  Create a feature branch.
3.  Make and test your changes.
4.  Commit with a clear message.
5.  Push your branch.
6.  Open a pull request.

When reporting bugs, include the browser, version, steps to reproduce,
expected behavior, actual behavior, and screenshots when useful.

## 📝 License

This project is licensed under the MIT License. See `LICENSE.md` for the
complete license terms.

## 📞 Support

Use the FinalGrade.io GitHub repository for project issues, discussions,
and development updates.

## 🙏 Acknowledgments

-   Modern browser standards
-   Open-source web development community
-   UI and educational gradebook design inspiration
-   Contributors and testers of FinalGrade.io

## 📚 Additional Resources

### Project Documents

-   **[UPDATES.md](UPDATES.md)** --- Full release notes and update
    history
-   **[LICENSE.md](LICENSE.md)** --- License information
-   **[STATUS.md](STATUS.md)** --- Current project/system status

### Repository

**FinalGrade.io:** https://github.com/t4studios/FinalGrade.io/tree/main

------------------------------------------------------------------------

**Made with 🔥 by the FinalGrade.io Team**

**Happy Grading! 📊**

------------------------------------------------------------------------

## Current Release

**FinalGrade.io 26.4.10 --- September 2026**

-   Manual gradebook publishing
-   Progress-period assignment management
-   Modern Teacher and Student Views
-   Saved-change student notifications
-   Read/unread notification tracking
-   Improved category and assignment management
-   Refined multiplier weighting
-   UI, overlay, footer, and stability fixes

------------------------------------------------------------------------

*Last Updated: September 2026*\
*Maintained by: FinalGrade.io Team*\
*Current Version: 26.4.10*\
*Repository: https://github.com/t4studios/FinalGrade.io/tree/main*
