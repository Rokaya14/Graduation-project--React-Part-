import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../Stylesheets/Dashboardstyle.css';
class Tablecomments extends React.Component {
    render(){
        return(
            <div>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">Posts </th>
                        <th scope="col">Number of comments</th>
                        <th scope="col">Number of toxic comments</th>
                        <th scope="col">Toxic Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>20</td>
                        <td>10</td>
                        <td><a class="page-link" href="/link">show toxic comments</a></td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                    </table>

                    
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                        <a class="page-link" href="/link" tabindex="-1">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="/link">1</a></li>
                        <li class="page-item"><a class="page-link" href="/link">2</a></li>
                        <li class="page-item"><a class="page-link" href="/link">3</a></li>
                        <li class="page-item">
                        <a class="page-link" href="/link">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );

    }

}
export default Tablecomments;