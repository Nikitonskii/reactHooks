import React, { Fragment, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Repos } from '../components/Repos'
import { GithubContext } from '../context/github/githubContext'

export const Profile = ({ match }) => {
	const { getUser, getRepos, loading, user, repos } = useContext(GithubContext)
	const urlName = match.params.name

	useEffect(() => {
		getUser(urlName)
		getRepos(urlName)
		//console.log('effect')
		// eslint-disable-next-line
	}, [])

	if (loading) {
		return <div className="d-flex justify-content-center">
			<div className="spinner-border" role="status">
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	}

	const {
		name, company, avatar_url, location,
		bio, blog, login, html_url, followers,
		public_repos, public_gists, following
	} = user

	return (

		<Fragment>
			<Link to="/" className="btn btn-link">To main page</Link>

			<div className="card mb-4">
				<div className="card-body">
					<div className="row">
						<div className="col-sm-3 text-center">
							<img
								src={avatar_url}
								alt={name}
								style={{ width: "150px" }}
							></img>
							<h1>{name}</h1>
							{location && <p>Location : {location} </p>}
						</div>
						<div className="col">
							{
								bio && <Fragment>
									<h3>BIO</h3>
									<p>{bio}</p>
								</Fragment>
							}
							<a
								href={html_url}
								target="_blanc"
								rel="noopener noreferrer"
								className="btn btn-dark"
							>
								Open profile
							</a>
							<ul>
								{login && <li>
									<strong>User </strong>{login}
								</li>}
								{company && <li>
									<strong>Company </strong>{company}
								</li>}
								{blog && <li>
									<strong>Website </strong>{blog}
								</li>}
							</ul>
							<div className="badge badge-primary">Followers : {followers}</div>
							<div className="badge badge-info">Following : {following}</div>
							<div className="badge badge-success">Public repos : {public_repos}</div>
							<div className="badge badge-dark">Public gists : {public_gists}</div>
						</div>
					</div>
				</div>
			</div>
			<Repos repos={repos} />
		</Fragment>
	)

}