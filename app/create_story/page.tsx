"use client";
import React from "react";
import StorySubjectInput from "./_components/StorySubjectInput";

export interface fieldData {
    fieldName: string;
    fieldValue: string;
}

function CreateStory() {
    const onHandleUseruseSelection = (data: fieldData) => {
        console.log(data);
    };

    return (
        <div className="p-10 md:px-20 lg:px-40 ">
            <h2 className="font-extralight text-[70px] text-primary text-center ">
                CREATE YOUR STORYS
            </h2>
            <p className="text-2xl text-primary text-center ">
                Unlock your creativity with AI: Craft stories like never
                before!Let our AI bring your imagination to life, one story at a
                time.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-1">
                {/* Story Subject */}
                <StorySubjectInput useSelection={onHandleUseruseSelection} />
                {/* Story Type */}

                {/* AGE  */}

                {/* IMG STYLE */}
            </div>
        </div>
    );
}

export default CreateStory;
