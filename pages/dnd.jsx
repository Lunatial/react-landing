import React from 'react';
import Link from "next/link";

const DnDExapmlePage = () => {
    return (
        <div>
            <h1>DnDExapmlePage</h1>
            <ul style={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/chess">
                        <a>chess</a>
                    </Link>
                </li>
                <li>
                    <Link href="/dnd">
                        <a>dnd</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default DnDExapmlePage;
