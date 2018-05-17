using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace AccesoDatos
{
    public interface IRepository<TEntity> : IDisposable where TEntity : class
    {
        TEntity Create(TEntity toCreate);
        bool Delete(TEntity toDelete);
        bool Update(TEntity toUpdate);
        TEntity Retrieve(Expression<Func<TEntity, bool>> criterio);
        List<TEntity> Filter(Expression<Func<TEntity, bool>> criterio);
        List<TEntity> GetAll();
    }
}
