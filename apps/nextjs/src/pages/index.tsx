import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import { useEffect } from "react";
import { getAbout } from "../utils/apiQueries";

export default function Home() {
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["about"],
    queryFn: getAbout,
    enabled: false, // enable to trigger automatic query updates
  });

  const renderContent = () => {
    if (isLoading) {
      return <span>Loading...</span>;
    }
    if (isError) {
      return <div>Error: {error as any}</div>;
    }
    if (data) {
      return <div>{JSON.stringify(data, null, 2)}</div>;
    }
  };

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div className="flex h-screen">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-full w-full justify-center items-center bg-gray-200">
        <div className="flex flex-col max-h-1/5 max-w-xl rounded-md justify-around items-center bg-white p-4 mx-auto my-auto">
          <h1 className="flex flex-row justify-center items-center pb-4">
            {renderContent()}
          </h1>
          <button
            className="flex flex-row justify-center items-center bg-blue-500 text-white py-2 px-3 rounded-md shadow-md"
            onClick={() => refetch()}
          >
            Refresh
          </button>
        </div>
      </main>
    </div>
  );
}
