using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;


namespace AccesoDatos
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        BDMBIIEntities4 Context = null;
        public Repository()
        {
            try
            {
                Context = new BDMBIIEntities4();
                Context.Configuration.ProxyCreationEnabled = false;                
            }
            catch (Exception ex)
            {
                throw new Exception("No se pudo crear el repositorio. " + ex.Message, ex);
            }
        }

        private DbSet<TEntity> EntitySet
        {
            get
            {
                return Context.Set<TEntity>();
            }
        }
        public TEntity Create(TEntity toCreate)
        {
            TEntity result = null;
            try
            {
                EntitySet.Add(toCreate);
                Context.SaveChanges();
                result = toCreate;
            }
            catch
            {

            }
            return result;
        }

        public void CreateAll(List<TEntity> ltsToCreate)
        {
            try
            {
                EntitySet.AddRange(ltsToCreate);
                Context.SaveChanges();
            }
            catch (Exception ex)
            {

                throw new Exception("No se pudo crear el repositorio. " + ex.Message, ex);

            }
        }
        public bool Delete(TEntity toDelete)
        {
            bool Result = false;
            try
            {
                EntitySet.Attach(toDelete);
                EntitySet.Remove(toDelete);
                Result = Context.SaveChanges() > 0;
            }
            catch
            {
            }
            return Result;
        }
        public bool Update(TEntity toUpdate)
        {
            bool Result = false;
            try
            {
                EntitySet.Attach(toUpdate);
                Context.Entry<TEntity>(toUpdate).State = EntityState.Modified;
                Result = Context.SaveChanges() > 0;
            }
            catch
            {
            }
            return Result;
        }
        public TEntity Retrieve(System.Linq.Expressions.Expression<Func<TEntity, bool>> criteria)
        {
            TEntity Result = null;
            try
            {
                Result = EntitySet.FirstOrDefault(criteria);
            }
            catch
            {
            }
            return Result;
        }
        public List<TEntity> Filter(System.Linq.Expressions.Expression<Func<TEntity, bool>> criteria)
        {
            List<TEntity> ltsResult = null;
            try
            {
                ltsResult = EntitySet.Where(criteria).ToList();
            }
            catch
            {
            }
            return ltsResult;
        }
        public void Dispose()
        {
            if (Context != null)
                Context.Dispose();
        }

        public List<TEntity> GetAll()
        {
            List<TEntity> ltsResult = null;
            try
            {
                ltsResult = EntitySet.ToList();
            }
            catch(Exception)
            {
                throw;
            }
            return ltsResult;
        }
    }
}
