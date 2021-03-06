import { useState, useEffect } from 'react';
import { catchErrors } from '../utils';
import {
  getCurrentUserProfile,
  getCurrentUserPlaylists,
  getTopArtists,
  getTopTracks
} from '../spotify';
import {
  SectionWrapper,
  ArtistsGrid,
  TrackList,
  PlaylistsGrid,
  Loader
} from '../components';
import { StyledHeader } from '../styles';
import styled from 'styled-components/macro';
import { logout } from '../spotify';

const StyledLogoutButton = styled.button`
  padding: var(--spacing-md) var(--spacing-lg);
  color: var(--white);
  font-size: var(--fz-xxs);
  font-weight: 500;
  border-radius: var(--border-radius-pill);
  background-color: inherit;
  border-color: var(--white);
  z-index: 5;
  text-transform: uppercase;
  border-color: #fff;
  /* @media (min-width: 768px) {
    right: var(--spacing-lg);
  } */
`;

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [playlists, setPlaylists] = useState(null);
  const [topArtists, setTopArtists] = useState(null);
  const [topTracks, setTopTracks] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userProfile = await getCurrentUserProfile();
      setProfile(userProfile.data);

      const userPlaylists = await getCurrentUserPlaylists();
      setPlaylists(userPlaylists.data);

      const userTopArtists = await getTopArtists();
      setTopArtists(userTopArtists.data);

      const userTopTracks = await getTopTracks();
      setTopTracks(userTopTracks.data);
    };

    catchErrors(fetchData());
  }, []);

  return (
    <>
      {profile && (
        <>
          <StyledHeader type="user">
            <div className="header__inner">
              {profile.images.length && profile.images[0].url && (
                <img className="header__img" src={profile.images[0].url} alt="Avatar"/>
              )}
              <div>
                <h1 className="header__name">{profile.display_name}</h1>
                <p className="header__meta">
                  {playlists && (
                    <span>{playlists.total} Playlist{playlists.total !== 1 ? 's' : ''}</span>
                  )}
                  <span>
                    {profile.followers.total} Follower{profile.followers.total !== 1 ? 's' : ''}
                  </span>
                </p>
                <StyledLogoutButton onClick={logout}>logout</StyledLogoutButton>
              </div>
            </div>
          </StyledHeader>

          <main>
            {topArtists && topTracks && playlists ? (
              <>
                <SectionWrapper title="Top artists this month" seeAllLink="/top-artists">
                  <ArtistsGrid artists={topArtists.items.slice(0, 10)} />
                </SectionWrapper>

                <SectionWrapper title="Top tracks this month" seeAllLink="/top-tracks">
                  <TrackList tracks={topTracks.items.slice(0, 10)} />
                </SectionWrapper>

                <SectionWrapper title="Public Playlists" seeAllLink="/playlists">
                  <PlaylistsGrid playlists={playlists.items.slice(0, 10)} />
                </SectionWrapper>
              </>
            ) : (
              <Loader />
            )}
          </main>
        </>
      )}
    </>
  )
};

export default Profile;