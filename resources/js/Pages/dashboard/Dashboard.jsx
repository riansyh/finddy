import { Link } from "@inertiajs/inertia-react";
import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Friend from "../../components/Friend";
import Layout from "../../components/Layout";
import MotivateCard from "../../components/MotivateCard";
import StatusCard from "../../partials/StatusCard";

function Dashboard({ friends, count }) {
    return (
        <Fragment>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>

            <h1 className="text-3xl font-bold text-black-1 mb-10">Dashboard</h1>
            <MotivateCard />

            <h3 className="h3 mt-8 mb-6">Status</h3>

            <div className="flex gap-3 flex-wrap justify-center md:justify-start">
                <StatusCard number={count.friends} href="/teman">
                    Teman Belajar
                </StatusCard>
                <StatusCard
                    number={count.requests}
                    href={route("friend.request")}
                >
                    Permintaan Pertemanan
                </StatusCard>
                <StatusCard number={count.discussions} href={route("forum.my")}>
                    Diskusiku
                </StatusCard>
            </div>

            <h3 className="h3 mt-8 mb-6">Teman Belajar</h3>
            {friends.length > 0 ? (
                <div className="flex flex-col gap-3">
                    {friends.map((user, index) => (
                        <Friend
                            id={user.id}
                            key={index}
                            name={user.nama_lengkap}
                            bidang={user.bidang_minat}
                            avatar={user.foto}
                            href={route("user.show", user.username)}
                            isFriend
                        />
                    ))}
                </div>
            ) : (
                <>
                    <p className="text-center text-xl text-black-2 mt-20">
                        Saat ini kamu belum memiliki teman belajar
                    </p>
                    <Link
                        href={route("friend")}
                        className="font-bold text-base text-blue-3 text-center w-full block mb-6"
                    >
                        Cari Teman Belajar Sekarang
                    </Link>
                </>
            )}
        </Fragment>
    );
}

Dashboard.layout = (page) => <Layout children={page} user={page.props.user} />;

export default Dashboard;
