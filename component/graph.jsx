import React from "react";
import graphdata from "/public/data.json";
import styles from "../styles/Chart.module.css";

function DayStat(props) {
    const day = props.day;
    var amount;
    var amountTotal = 0;
    var amountHighest = 0;

    // Iterate through data array
    graphdata.forEach((e) => {
        // Match amount with day 
        if (e.day == day) {
            amount = e.amount
        }

        // Calculate Highest amount
        if (amountHighest < e.amount) {
            amountHighest = e.amount;
            // console.log("current Highest: " + amountHighest)
        }

        // Calculate total amount
        amountTotal += e.amount;
    });

    // Calculate Statbar height and standardize it
    const amountPercentage = (amount * amountTotal) / 100;

    return (
        <div>
            <div
                className={styles.progressBar}
                style={{
                    height: amountPercentage + "px",
                    // change bg for highest amount
                    backgroundColor: amount === amountHighest ? "var(--primary-cyan)" : "var(--primary-soft-red)"
                }
                }
            >
                <span className={styles.tooltiptext}>${amount}</span>
            </div>
            <span className={styles.titleSmall}>
                {props.day}
            </span>
        </div>
    );
}

export default function Graph() {
    return (
        <div className={styles.graph}>
            <DayStat day="mon" />
            <DayStat day="tue" />
            <DayStat day="wed" />
            <DayStat day="thu" />
            <DayStat day="fri" />
            <DayStat day="sat" />
            <DayStat day="sun" />
        </div>
    )
}