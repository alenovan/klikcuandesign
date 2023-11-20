'use client';

import ArtikelList from "@/components/Artikel/ArikelList";
import DashboardLayout from "@/components/Layout/DashboardLayout";


const Artikel = () => {

    return (
        <DashboardLayout
            bottomNavigation={false}
            px="20px"
            meta={{
                title: 'Beli Followers Tik Tok | Jasa Followers Tik Tok',
                description:
                    'Cara mudah beli followers Tik Tok dan like Tik Tok secara aman dengan harga termurah di Indonesia hanya di smm panel viralizer.',
            }}
            navbarHeader={{

                showBackButton: true,
                title: "Artikel"

            }}
        >
            <ArtikelList />
        </DashboardLayout>
    );
};

export default Artikel;
