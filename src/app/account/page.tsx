"use client";
import { fetchMyAccounts } from "@/api/account";
import Accounts from "@/components/account/Accounts";
import { NoAccount } from "@/components/account/NoAccount";
import queryKeys from "@/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";

const MyPage: FC = () => {
  const { isLoading, data } = useQuery({ queryKey: queryKeys.MY_ACCOUNTS, queryFn: fetchMyAccounts });

  if (isLoading) {
    return <p>loading...</p>;
  } else {
    return data?.length == 0 || !data ? <NoAccount /> : <Accounts myAccounts={data ?? []} />;
  }
};

export default MyPage;
