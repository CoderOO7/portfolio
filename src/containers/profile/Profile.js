import React, {useEffect, lazy, Suspense} from "react";
import {openSource} from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";
import {useAPI} from "../../hooks/useApi";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);
export default function Profile() {
  const {
    data: profile = {},
    error: profileError,
    submit: fetchProfile
  } = useAPI("profile");

  useEffect(() => {
    if (openSource.showGithubProfile) {
      fetchProfile();
    }
  }, [fetchProfile]);

  if (
    openSource.display &&
    openSource.showGithubProfile &&
    !profileError &&
    profile?.name
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={profile} />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
}
