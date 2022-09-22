<template>
    
    A bulle is just an element sticking to another element

    <br><br>

    <!-- Tooltip -->
    <div>
        <span>I activate the tooltip</span>
        <bulle hover :gap="20">I'm a tooltip</bulle>
    </div>

    <!-- Dropdown hover -->
    <div>
        <span>I activate the dropdown on hover</span>
        <bulle enter>
            <div class="dropdown">
                <list>
                <list-item data-bulle-stop="true">
                    I'm an item of the dropdown
                </list-item>
                <list-item>I won't hide !</list-item>
            </list>
            </div>
        </bulle>
    </div>

    <!-- Dropdown click -->
    <div>
        <span>I activate the dropdown on click</span>
        <bulle>
            <list>
                <list-item data-bulle-stop="true">
                    I'm an item of the dropdown
                </list-item>
                <list-item>I won't hide !</list-item>
            </list>
        </bulle>
    </div>

    <!-- Custom -->
    <div>
        <span>I activate custom bulle on click</span>
        <bulle>I am the custom bulle !</bulle>
    </div>

</template>